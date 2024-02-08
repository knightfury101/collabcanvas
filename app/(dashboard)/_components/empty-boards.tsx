"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);
  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Canvas Created!");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed To Create Canvas"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image height={110} width={110} alt="Empty" src="/note.svg" />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Canvas!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start By Creating A Board For Your Organization...
      </p>
      <div className="mt-6">
        <Button disabled={pending} size="lg" onClick={onClick}>
          Create Canvas
        </Button>
      </div>
    </div>
  );
};
