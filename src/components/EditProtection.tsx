import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

interface EditProtectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const EditProtection = ({ children, fallback }: EditProtectionProps) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return fallback || (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <Lock className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-1">Edit Restricted</h3>
          <p className="text-sm text-muted-foreground">
            Admin privileges required to edit content.
          </p>
        </CardContent>
      </Card>
    );
  }

  return <>{children}</>;
};

export default EditProtection;