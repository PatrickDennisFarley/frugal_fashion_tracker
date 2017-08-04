class CreateQueries < ActiveRecord::Migration[5.1]
  def change
    create_table :queries do |t|
      t.belongs_to :user, null: false
      t.string :body, null: false

      t.timestamps
    end
  end
end
