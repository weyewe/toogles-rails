<% Dir.glob(Rails.root.join('app','assets','templates', '**' , '*')).each do |f| %>
  
  
  $templateCache.put("<%= File.basename(f).gsub(/\.haml$/, '')  %>", <%= Haml::Engine.new(File.read(f)).render.to_json %>);
<% end %>


root_path = Rails.root.join('app','assets','templates').to_s
Dir.glob(Rails.root.join('app','assets','templates', '**' , '*')).each do |f|
  
  if not File.directory? f
    key =  f.gsub( "#{root_path}/",  '')
    value = File.read( f ) 
    $templateCache.put( "#{key}", "#{value}")
  end
  
end