class LocationsController < ApplicationController
  def index
    @locations = Location.all
    @title = 'hello world'
    # render 'index', @locations
  end
end
