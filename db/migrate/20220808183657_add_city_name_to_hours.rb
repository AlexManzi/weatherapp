class AddCityNameToHours < ActiveRecord::Migration[7.0]
  def change
    add_column :hours, :cityName, :string
  end
end
