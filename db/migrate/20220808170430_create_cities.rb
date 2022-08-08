class CreateCities < ActiveRecord::Migration[7.0]
  def change
    create_table :cities do |t|
      t.decimal :currentTemp
      t.integer :time
      t.decimal :feelsLike
      t.decimal :uvi
      t.integer :sunrise
      t.integer :sunset
      t.string :icon
      t.integer :humidity
      t.string :cityName

      t.timestamps
    end
  end
end
