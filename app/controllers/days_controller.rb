class DaysController < ApplicationController
    def index 
        days = Day.all 
        render json: days
    end

    def update
        day = Day.find_by!(cityName: params[:cityName], dayNumber: params[:dayNumber])
        day.update!(params.permit(:city_id, :dailyTime, :tempH, :tempL, :icon, :dayNumber, :cityName))
        render json: day
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: {errors: invalid.record.errors}, status: 422
    end

    def create
        if Day.exists?(cityName: params[:cityName], dayNumber: params[:dayNumber])
            update
        else
            day = Day.create!(params.permit(:city_id, :dailyTime, :tempH, :tempL, :icon, :dayNumber, :cityName))
            render json: day
        end
    end

    def showByCityName
        days = Day.where(:cityName => params[:cityName])
        render json: days
    end
end
