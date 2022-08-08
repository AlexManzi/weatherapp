class AddCityNameToDays < ActiveRecord::Migration[7.0]
  def change
    add_column :days, :cityName, :string
  end
end
