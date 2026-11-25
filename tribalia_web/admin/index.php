<?php
session_start();

// Cambia esta contraseña antes de subir a producción en Hostinger
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'Tribalia2026!');

$dataFile = __DIR__ . '/../data/editorial.json';
$uploadDir = __DIR__ . '/../uploads/magazines/';
if (!is_dir($uploadDir)) {
    @mkdir($uploadDir, 0755, true);
}

function loadEditorial($file) {
    if (!file_exists($file)) return ['news' => [], 'magazines' => []];
    $json = json_decode(file_get_contents($file), true);
    return is_array($json) ? $json : ['news' => [], 'magazines' => []];
}

function saveEditorial($file, $data) {
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: index.php');
    exit;
}

$error = '';
if (isset($_POST['login'])) {
    if (($_POST['user'] ?? '') === ADMIN_USER && ($_POST['pass'] ?? '') === ADMIN_PASS) {
        $_SESSION['tribalia_admin'] = true;
        header('Location: index.php');
        exit;
    } else {
        $error = 'Usuario o contraseña incorrectos.';
    }
}

$isLogged = !empty($_SESSION['tribalia_admin']);
$editorial = loadEditorial($dataFile);
$notice = '';

if ($isLogged && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['add_news'])) {
        $editorial['news'][] = [
            'id' => time(),
            'title' => trim($_POST['title'] ?? ''),
            'tag' => trim($_POST['tag'] ?? 'Tribalia'),
            'date' => date('Y-m-d'),
            'summary' => trim($_POST['summary'] ?? ''),
            'url' => trim($_POST['url'] ?? '')
        ];
        saveEditorial($dataFile, $editorial);
        $notice = 'Noticia publicada correctamente.';
    }

    if (isset($_POST['delete_news'])) {
        $delId = (string)($_POST['id'] ?? '');
        $editorial['news'] = array_values(array_filter($editorial['news'], fn($n) => (string)$n['id'] !== $delId));
        saveEditorial($dataFile, $editorial);
        $notice = 'Noticia eliminada.';
    }

    if (isset($_POST['add_magazine'])) {
        $id = time();
        $epubUrl = '';
        $pdfUrl = '';

        if (!empty($_FILES['epub_file']['tmp_name'])) {
            $epubName = "revista_{$id}.epub";
            if (move_uploaded_file($_FILES['epub_file']['tmp_name'], $uploadDir . $epubName)) {
                $epubUrl = "uploads/magazines/{$epubName}";
            }
        }
        if (!empty($_FILES['pdf_file']['tmp_name'])) {
            $pdfName = "revista_{$id}.pdf";
            if (move_uploaded_file($_FILES['pdf_file']['tmp_name'], $uploadDir . $pdfName)) {
                $pdfUrl = "uploads/magazines/{$pdfName}";
            }
        }

        $editorial['magazines'][] = [
            'id' => $id,
            'title' => trim($_POST['title'] ?? ''),
            'edition' => trim($_POST['edition'] ?? 'Edición 2026'),
            'date' => date('Y-m-d'),
            'summary' => trim($_POST['summary'] ?? ''),
            'epub_url' => $epubUrl,
            'pdf_url' => $pdfUrl
        ];
        saveEditorial($dataFile, $editorial);
        $notice = 'Revista subida correctamente.';
    }

    if (isset($_POST['delete_magazine'])) {
        $delId = (string)($_POST['id'] ?? '');
        $editorial['magazines'] = array_values(array_filter($editorial['magazines'], fn($m) => (string)$m['id'] !== $delId));
        saveEditorial($dataFile, $editorial);
        $notice = 'Revista eliminada.';
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel Editorial | Tribalia</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Noto+Sans:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Noto Sans', sans-serif; background: #F8FAFC; color: #334155; margin: 0; padding: 32px 16px; }
    .wrap { max-width: 960px; margin: 0 auto; }
    .card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 28px; margin-bottom: 24px; box-shadow: 0 6px 20px rgba(11,40,83,0.06); }
    h1, h2 { font-family: 'Montserrat', sans-serif; color: #0B2853; margin-top: 0; }
    label { display: block; font-weight: 600; font-size: 0.85rem; margin: 12px 0 4px; color: #0B2853; }
    input, textarea { width: 100%; box-sizing: border-box; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; }
    button { margin-top: 14px; background: #0B2853; color: #fff; border: none; padding: 11px 20px; border-radius: 8px; font-family: 'Montserrat', sans-serif; font-weight: 600; cursor: pointer; }
    button.danger { background: #DC2626; padding: 6px 12px; font-size: 0.8rem; margin-top: 0; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #E2E8F0; }
    @media (max-width: 768px) { .row { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
<div class="wrap">
  <?php if (!$isLogged): ?>
    <div class="card" style="max-width:420px;margin:60px auto;">
      <h1>Admin Tribalia</h1>
      <?php if ($error): ?><p style="color:#DC2626;"><?= htmlspecialchars($error) ?></p><?php endif; ?>
      <form method="post">
        <label>Usuario</label>
        <input type="text" name="user" required>
        <label>Contraseña</label>
        <input type="password" name="pass" required>
        <button type="submit" name="login">Ingresar</button>
      </form>
    </div>
  <?php else: ?>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <h1>Panel Editorial Tribalia</h1>
      <div>
        <a href="../index.html" style="margin-right:16px;color:#00A8E8;font-weight:700;">Ver sitio ↗</a>
        <a href="?logout=1" style="color:#DC2626;font-weight:700;">Cerrar sesión</a>
      </div>
    </div>

    <?php if ($notice): ?><div class="card" style="background:#ECFDF5;border-color:#10B981;color:#065F46;font-weight:600;"><?= htmlspecialchars($notice) ?></div><?php endif; ?>

    <div class="row">
      <div class="card">
        <h2>Publicar Noticia</h2>
        <form method="post">
          <label>Título</label>
          <input type="text" name="title" required>
          <label>Etiqueta / Categoría</label>
          <input type="text" name="tag" value="Actualidad Tribalia">
          <label>Resumen</label>
          <textarea name="summary" rows="3" required></textarea>
          <label>Enlace opcional</label>
          <input type="url" name="url" placeholder="https://...">
          <button type="submit" name="add_news">Publicar Noticia</button>
        </form>
      </div>

      <div class="card">
        <h2>Subir Revista (EPUB + PDF)</h2>
        <form method="post" enctype="multipart/form-data">
          <label>Título de la edición</label>
          <input type="text" name="title" required>
          <label>Número / Año</label>
          <input type="text" name="edition" value="Edición N.º 01 · 2026">
          <label>Resumen</label>
          <textarea name="summary" rows="2" required></textarea>
          <label>Archivo EPUB (para lectura tipo libro)</label>
          <input type="file" name="epub_file" accept=".epub" required>
          <label>Archivo PDF (para descarga)</label>
          <input type="file" name="pdf_file" accept=".pdf" required>
          <button type="submit" name="add_magazine">Subir Revista</button>
        </form>
      </div>
    </div>

    <div class="card">
      <h2>Noticias publicadas (<?= count($editorial['news']) ?>)</h2>
      <?php foreach ($editorial['news'] as $n): ?>
        <div class="item">
          <div><strong><?= htmlspecialchars($n['title']) ?></strong> <small>(<?= htmlspecialchars($n['date']) ?>)</small></div>
          <form method="post"><input type="hidden" name="id" value="<?= htmlspecialchars($n['id']) ?>"><button type="submit" name="delete_news" class="danger">Eliminar</button></form>
        </div>
      <?php endforeach; ?>
    </div>

    <div class="card">
      <h2>Revistas publicadas (<?= count($editorial['magazines']) ?>)</h2>
      <?php foreach ($editorial['magazines'] as $m): ?>
        <div class="item">
          <div><strong><?= htmlspecialchars($m['title']) ?></strong> — <?= htmlspecialchars($m['edition']) ?></div>
          <form method="post"><input type="hidden" name="id" value="<?= htmlspecialchars($m['id']) ?>"><button type="submit" name="delete_magazine" class="danger">Eliminar</button></form>
        </div>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
</div>
</body>
</html>
