module ApplicationHelper

	def full_title(page_title)
	   base_title = "Alina Paskeyeva Photography" 
	   if page_title.empty?
	      base_title
	   else
	       "#{base_title} / #{page_title}"
	   end
	end

	def get_image_url(html)
		html = html.match(/"[^"]*"/).to_s
		html.gsub(/\"/,'')
	end
	
	def get_social_url(html)
		html.gsub(/<\/*p>/,'')
	end

	def get_sale(html)
		html = html.gsub(/<\/*p>/,'').gsub(/\/>[^<]*</,'/><')		
		html = html.gsub('/><img','/><div id="line"></div><img')
		html.gsub(/title=[^\/]*/,'').gsub(/\/>/,'class="image bxslider_images" />')
	end

	def get_preview(html)
    	html.gsub(/height="\d+"/,'class="preview"').gsub(/width="\d+"/,'')
	end

	private

	def parent_gallery_items(items)
		items.first.gallery.parent
	end
	def galleries_all
		Refinery::Portfolio::Gallery.roots
	end

	def mobile
		browser.device.mobile? || browser.device.tablet? || browser.device.ipad? || browser.device.iphone? || browser.platform.android? || browser.platform.blackberry? 
	end
	
	def first_item(gallery)
		gallery.cover_image.image
	end

	def second_item(gallery)
		gallery.items.last.image
	end

	def parent_gallery(gallery)
		gallery.parent
	end
end
