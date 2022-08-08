class CreateCities < ActiveRecord::Migration[7.0]
  def change
    create_table :cities do |t|
      t.decimal :current_temp
      t.decimal :feels_like
      t.integer :humidity
      t.decimal :uvi
      t.integer :sunrise
      t.integer :sunset
      t.integer :time
      t.string :icon
      t.string :city_name
      t.references :hours, null: false, foreign_key: true
      t.references :days, null: false, foreign_key: true

      t.timestamps
    end
  end
end
