class AddDescToCities < ActiveRecord::Migration[7.0]
  def change
    add_column :cities, :weatherdesc, :string
  end
end
