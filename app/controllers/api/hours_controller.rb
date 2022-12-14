class Api::HoursController < ApplicationController
    def index 
        hours = Hour.all 
        render json: hours
    end

    def update
        hour = Hour.find_by!(cityName: params[:cityName], hourNumber: params[:hourNumber])
        hour.update!(params.permit(:city_id, :hourlyTime, :temp, :icon, :hourNumber, :cityName))
        render json: hour
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: {errors: invalid.record.errors}, status: 422
    end

    def create
        if Hour.exists?(cityName: params[:cityName], hourNumber: params[:hourNumber])
            update
        else
            hour = Hour.create!(params.permit(:city_id, :hourlyTime, :temp, :icon, :hourNumber, :cityName))
            render json: hour
        end
    end

    def showByCityName
        hours = Hour.where(:cityName => params[:cityName])
        render json: hours
    end

end
