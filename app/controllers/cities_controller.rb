class CitiesController < ApplicationController
    def index 
        cities = City.all 
        render json: cities
    end

    def update
        city = City.find_by!(cityName: params[:cityName])
        city.update!(params.permit(:currentTemp, :time, :feelsLike, :uvi, :sunrise, :sunset, :icon, :humidity, :cityName))
        render json: city
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: {errors: invalid.record.errors}, status: 422
    end

    def create
        City.exists?(cityName: params[:cityName])
        if true
            update
        else
            city = City.create!(params.permit(:currentTemp, :time, :feelsLike, :uvi, :sunrise, :sunset, :icon, :humidity, :cityName))
            render json: city
        rescue ActiveRecord::RecordInvalid => invalid 
            render json: {errors: invalid.record.errors}, status: 422
        end
end
