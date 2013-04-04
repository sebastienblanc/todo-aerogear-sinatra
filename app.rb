$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'sinatra/base'
require 'json'
require 'dm-sqlite-adapter'
require 'helpers'
require 'env'

module Sinatra
  module Todo 

    configure do
      set :views, "#{File.dirname(__FILE__)}/views"
    end

    get '/' do
      File.read(File.join('public', 'index.html'))
    end
    
    # Project endpoints

    post '/projects' do
      Project.create(json_body)
    end

    delete '/projects/:id' do
      project = Project.get(params[:id])
      project.destroy
    end

    get '/projects/:id' do
      project = Project.get(params[:id])
      project.to_json
    end

    get '/projects' do
      projects = Project.all
      projects.to_json
    end

    put '/projects/:id' do
      project = Project.get(params[:id])
      project.update(json_body)
    end

    # Tasks endpoints

    post '/tasks' do
      #Task.create(json_body)
      task = Task.new
      task.title =  json_body['title']
      task.description =  json_body['description']
      task.date =  json_body['date']
      task.project = Project.get(json_body['project'])
      task.tags = [] 
      task.save
      
    end
    
    delete '/tasks/:id' do
      task = Task.get(params[:id])
      task.destroy
    end
    
    get '/tasks/:id' do
      task = Task.get(params[:id])
      task.to_json
    end

    get '/tasks' do
      tasks = Task.all
      tasks.to_json
    end
    
    put '/tasks/:id' do
      task = Task.get(params[:id])
      task.update(json_body)
    end

    # Tags endpoints

    post '/tags' do
      Tag.create(json_body)
    end

    delete '/tags/:id' do
      tag = Tag.get(params[:id])
      tag.destroy
    end
    
    get '/tags/:id' do
      tag = Tag.get(params[:id])
      tag.to_json
    end
    
    get '/tags' do
      tag = Tag.all
      tag.to_json
    end

    put '/tags/:id' do
      tag = Tag.get(params[:id])
      tag.update(json_body)
    end
    
  end
end
