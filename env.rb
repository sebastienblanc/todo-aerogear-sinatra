require 'rubygems'
require 'data_mapper'
require 'erb'
Dir[File.dirname(__FILE__) + '/model/*.rb'].each {|file| require file }

require 'sinatra' unless defined?(Sinatra)


configure do
  $LOAD_PATH.unshift("#{File.dirname(__FILE__)}/model")
  Dir.glob("#{File.dirname(__FILE__)}/lib/*.rb") { |lib| require File.basename(lib, '.*') }
  DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/db/#{Sinatra::Base.environment}.db")
end
