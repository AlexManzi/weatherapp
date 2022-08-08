class CreateHours < ActiveRecord::Migration[7.0]
  def change
    create_table :hours do |t|
      t.integer :hourly_time
      t.decimal :temperature
      t.string :icon
      t.integer :hour_number

      t.timestamps
    end
  end
end
