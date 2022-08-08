class CreateDays < ActiveRecord::Migration[7.0]
  def change
    create_table :days do |t|
      t.decimal :tempH
      t.decimal :tempL
      t.string :icon
      t.integer :dayNumber
      t.references :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
