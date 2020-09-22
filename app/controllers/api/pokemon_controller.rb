class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render json: @pokemon
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render json: @pokemon
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, moves: [])
  end
end
