class Api::PokemonController < ApplicationController
  def index
    sleep 1
    @pokemon = Pokemon.all
    # render json: @pokemon
  end

  def show
    sleep 1
    @pokemon = Pokemon.find(params[:id])
    # render json: @pokemon
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      # render json: @pokemon
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, moves: [])
  end
end
