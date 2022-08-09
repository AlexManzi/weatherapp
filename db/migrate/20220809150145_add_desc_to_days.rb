class AddDescToDays < ActiveRecord::Migration[7.0]
  def change
    add_column :days, :weatherdesc, :string
  end
end
