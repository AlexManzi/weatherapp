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
        if City.exists?(cityName: params[:cityName])
            update
        else
            city = City.create!(params.permit(:currentTemp, :time, :feelsLike, :uvi, :sunrise, :sunset, :icon, :humidity, :cityName))
            render json: city
        end
    end
    
    def show
        clients = Client.find(params[:user_id])
        render json: clients, include: :reservations
    end
end
