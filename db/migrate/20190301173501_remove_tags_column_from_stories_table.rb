class RemoveTagsColumnFromStoriesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :stories, :tags
  end
end
