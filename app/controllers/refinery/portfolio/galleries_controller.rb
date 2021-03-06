module Refinery
  module Portfolio
    class GalleriesController < ::ApplicationController

      before_filter :find_page

      def index
        @galleries = Gallery.roots
        @items = Item.root_items
        present(@page)
      end

      def show
        @gallery = Gallery.friendly.find(params[:id])
        @galleries = @gallery.children.page(params[:page]).per_page(20)
        @items = @gallery.items
        present(@page)
        respond_to do |format|
	        format.html { render action: 'index' }
	        format.js
	    end
      end

      protected

      def find_page
        @page = ::Refinery::Page.find_by(:link_url => Refinery::Portfolio.page_url)
      end

    end
  end
end
