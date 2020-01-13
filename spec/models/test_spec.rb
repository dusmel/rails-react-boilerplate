# frozen_string_literal: true

require "rails_helper"

RSpec.describe Test, type: :model do
  it "has a valid factory" do
    expect(FactoryBot.build(:test)).to be_valid
  end

  it { should validate_presence_of(:title) }
end
