require 'sinatra'

set :public_folder, Proc.new { File.join(root, "build") }

get '/' do
  File.read('index.html')
end
