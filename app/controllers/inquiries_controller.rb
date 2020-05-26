class InquiriesController < ApplicationController
  def create
    @inquiry = Inquiry.new(mail_params)
      if @inquiry.save
        InquiryMailer.send_mail(@inquiry).deliver
  
        redirect_to root_path 
        flash[:notice] = 'Contact was successfully created.' 
      else
        render :index 
        flash[:notice] = 'メッセージの送信に失敗しました.' 
      end
  end

  private

  def mail_params
    params.permit(:name, :email, :subject, :message)
  end
end
