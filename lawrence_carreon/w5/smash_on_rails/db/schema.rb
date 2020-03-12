# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_11_110630) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.text "name"
    t.text "franchise"
    t.text "stock_symbol"
    t.text "availability"
    t.text "image"
  end

  create_table "game_links", force: :cascade do |t|
    t.integer "character_id"
    t.integer "game_id"
  end

  create_table "games", force: :cascade do |t|
    t.text "name"
    t.date "release_date"
    t.text "patch_version"
    t.text "image"
  end

  create_table "specials", force: :cascade do |t|
    t.text "name"
    t.text "input_direction"
    t.text "attack_type"
    t.text "damage_dealt"
    t.text "preview"
    t.integer "character_id"
  end

end
