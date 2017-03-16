class StaticPagesController < ApplicationController

  def home
  end

  def about
  end

  def contact
  	@contact = Contact.new
  end

  def portfolio
  end

  def passions
  	
  end

end
