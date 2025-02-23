class InvitationPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def update?
    record.receiver == user || user.admin?
  end

  def destroy?
    record.sender == user || user.admin?
  end
end
