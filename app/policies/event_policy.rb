class EventPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def update?
    record.user == user || user.admin?
  end

  def show?
    user
  end

  def create?
    user
  end

  def destroy?
    record.user == user || user.admin?
  end
end