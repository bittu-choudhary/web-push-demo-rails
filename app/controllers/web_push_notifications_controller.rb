class WebPushNotificationsController < ApplicationController

  def index
  end

  def push
    Webpush.payload_send(
        ttl: 600,
        message: params[:message],
        endpoint: params[:subscription][:endpoint],
        p256dh: params[:subscription][:keys][:p256dh],
        auth: params[:subscription][:keys][:auth],
        vapid: {
            subject: "mailto:sender@example.com",
            public_key: ENV['VAPID_PUBLIC_KEY'],
            private_key: ENV['VAPID_PRIVATE_KEY']
        }
    )
  end

end
