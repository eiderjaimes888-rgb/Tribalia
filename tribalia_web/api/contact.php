<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$product = trim($data['product'] ?? 'General');
$message = trim($data['message'] ?? '');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Por favor completa nombre, correo válido y mensaje.']);
    exit;
}

// Guardar respaldo local en JSON
$logFile = __DIR__ . '/../data/contacts.json';
$entries = [];
if (file_exists($logFile)) {
    $decoded = json_decode(file_get_contents($logFile), true);
    if (is_array($decoded)) $entries = $decoded;
}

$entries[] = [
    'date' => date('c'),
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'product' => $product,
    'message' => $message
];

file_put_contents($logFile, json_encode($entries, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Enviar correo corporativo en Hostinger
$to = 'contacto@tribalia.com.co';
$subject = "Nuevo contacto web Tribalia - $product";
$body = "Nombre: $name\nCorreo: $email\nTeléfono: $phone\nAplicación: $product\n\nMensaje:\n$message\n";
$headers = "From: no-reply@tribalia.com.co\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";

@mail($to, $subject, $body, $headers);

echo json_encode(['ok' => true, 'message' => 'Mensaje enviado correctamente.']);
