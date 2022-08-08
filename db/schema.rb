# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_08_183657) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.decimal "currentTemp"
    t.integer "time"
    t.decimal "feelsLike"
    t.decimal "uvi"
    t.integer "sunrise"
    t.integer "sunset"
    t.string "icon"
    t.integer "humidity"
    t.string "cityName"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "days", force: :cascade do |t|
    t.decimal "tempH"
    t.decimal "tempL"
    t.string "icon"
    t.integer "dayNumber"
    t.bigint "city_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "cityName"
    t.index ["city_id"], name: "index_days_on_city_id"
  end

  create_table "hours", force: :cascade do |t|
    t.integer "hourlyTime"
    t.decimal "temp"
    t.string "icon"
    t.integer "hourNumber"
    t.bigint "city_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "cityName"
    t.index ["city_id"], name: "index_hours_on_city_id"
  end

  add_foreign_key "days", "cities"
  add_foreign_key "hours", "cities"
end
