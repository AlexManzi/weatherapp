class AddDailyTimeToDays < ActiveRecord::Migration[7.0]
  def change
    add_column :days, :dailyTime, :integer
  end
end
