class Api::CitiesController < ApplicationController
    def index 
        cities = City.all 
        render json: cities
    end

    def update
        city = City.find_by!(cityName: params[:cityName])
        city.update!(params.permit(:currentTemp, :time, :feelsLike, :uvi, :sunrise, :sunset, :icon, :humidity, :cityName, :weatherdesc))
        render json: city
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: {errors: invalid.record.errors}, status: 422
    end

    def create
        if City.exists?(cityName: params[:cityName])
            update
        else
            city = City.create!(params.permit(:currentTemp, :time, :feelsLike, :uvi, :sunrise, :sunset, :icon, :humidity, :cityName, :weatherdesc))
            render json: city
        end
    end
    
    def show
        city = City.find_by!(params[:cityName])
        render json: city
    end

    def showByCityName
        city = City.where(:cityName => params[:cityName])
        render json: city
    end
end
