require 'rubygems'
require 'bundler/setup'
require File.join(File.dirname(__FILE__), 'env')

task :default => :migrate

namespace :db do
  desc 'Generate the schema into the datastore'
  task :migrate => :env do
    DataMapper.auto_migrate!
  end

  desc 'Upgrade the schema into the datastore'
  task :upgrade => :env do
    DataMapper.auto_upgrade!
  end

  desc "Add initial data"
  task :setup do
    tag = Tag.new
    tag.title = "rock"
    tag.style = "style1"
    tag.tasks = [tag]
    tag.save

    task = Task.new
    task.title = "Start a punk rock band"
    task.description = "Find my friends to start a punk rock band"
    task.date = Date.new(2012, 12 ,12)
    task.tags = [] 
    task.save

    project = Project.new
    project.title = "Air Drummer"
    project.style = "Rock"
    project.tasks = [task]
    project.save

  end 
  desc "Drop initial data"
  task :drop do
    Tag.all.destroy  
    Task.all.destroy  
    Project.all.destroy  
  end 
end

task :env do
  require File.join(File.dirname(__FILE__), 'env')
end

