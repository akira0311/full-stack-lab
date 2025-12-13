'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">仪表板</CardTitle>
          <CardDescription>欢迎登录 RepoVault</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">您已成功登录系统</p>
          <Button onClick={() => router.push('/')} className="w-full">
            返回首页
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
