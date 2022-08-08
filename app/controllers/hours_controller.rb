class HoursController < ApplicationController
    def index 
        hours = Hour.all 
        render json: hours
    end
end
