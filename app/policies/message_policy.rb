class MessagePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    record.event.user == user || user.admin? || record.event.is_invited?(user)
  end
end
