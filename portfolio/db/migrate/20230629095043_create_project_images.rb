class CreateProjectImages < ActiveRecord::Migration[7.0]
  def change
    create_table :project_images do |t|
      t.integer :project_id
      t.string :image_name

      t.timestamps
    end
  end
end
