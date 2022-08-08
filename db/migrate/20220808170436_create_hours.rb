class CreateHours < ActiveRecord::Migration[7.0]
  def change
    create_table :hours do |t|
      t.integer :hourlyTime
      t.decimal :temp
      t.string :icon
      t.integer :hourNumber
      t.references :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
