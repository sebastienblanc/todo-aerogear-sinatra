class Project
  include DataMapper::Resource

  property :id,       Serial
  property :title,    String  
  property :style,    String,  :allow_nil => true
  has n, :tasks
end

class Tag 
  include DataMapper::Resource

  property :id,       Serial
  property :title,    String  
  property :style,    String  
  has n, :tasks, :through => Resource

end

class Task 
  include DataMapper::Resource

  property :id,           Serial
  property :title,        String  
  property :description,  String  
  property :date,         String
  has n, :tags, :through => Resource
  belongs_to :project
end

DataMapper.finalize


