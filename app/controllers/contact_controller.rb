class ContactController < ApplicationController
  def index
  end

  def create
    info_msg = {
      'embeds': [{
        'title': 'New Contact Message',
        'color': 0x00ADB5,
        'fields': [
          {
            'name': 'Email',
            'value': params[:email]
          },
          {
            'name': 'Message',
            'value': params[:message]
          }
        ]
      }]
    }

    if Rails.env.production?
      webhook_url = ENV["WEBHOOK_URL"]
    else
      webhook_url = File.open(Rails.root.join('config', 'secure', 'contact_webhook.key')).read
    end

    res = HTTParty.post(webhook_url, body: JSON.generate(info_msg), headers: { 'Content-Type': 'application/json' })

    flash[:success] = 'Message was send.'
    redirect_to :contact
  end
end
