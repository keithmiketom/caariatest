


use Rack::Static,
  :urls => ["/images", "/js", "/css", "/test", "dialer.html", "calculator.html"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html' File::RDONLY)
  ]
}
