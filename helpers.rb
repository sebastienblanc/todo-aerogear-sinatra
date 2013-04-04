helpers do
  def json_body
    request.body.rewind
    @json_body ||= JSON.parse(request.body.read)
  end
end
