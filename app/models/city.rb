class City < ApplicationRecord
  has_many :days
  has_many :hours
end
