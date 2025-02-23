class ItemPolicy < ApplicationPolicy
    class Scope < Scope
      def resolve
        scope.all   
      end
    end
    
    def update?
      true
    end
  
    def show?
      user
    end
  
    def create?
      user
    end
  
    def destroy?
      record.event.is_invited?(user) || record.event.user == user
    end
  end