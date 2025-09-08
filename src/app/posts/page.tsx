"use client";

import { Spinner } from "@/components/shared/spinner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import useRefetch from "@/hooks/use-refetch";
import { trpc } from "@/lib/trpc-client";
import { useState } from "react";
import { toast } from "sonner";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const refetch = useRefetch();
  const { data: posts, isLoading: isLoadingPosts } =
    trpc.post.getAll.useQuery();
  const { mutate: addPost, isPending: isAddingPost } =
    trpc.post.addPost.useMutation({
      onSuccess: () => {
        refetch();
        toast.success("Post added successfully");
      },
      onError: () => {
        toast.error("Failed to add post");
      },
    });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ title, description });
    setTitle("");
    setDescription("");
  };
  if (isLoadingPosts) return <Spinner size="lg" />;
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Create a post</CardTitle>
          <CardDescription>Add a post to share with the world</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input
              type="text"
              name="title"
              placeholder="moonlight"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isAddingPost}
            />
            <Textarea
              name="description"
              placeholder="I want to go to the moon"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isAddingPost}
            />
            <Button type="submit" disabled={isAddingPost}>
              {isAddingPost ? "Adding..." : "Add Post"}
            </Button>
          </form>
          <Separator />
          <div>
            <h3 className="text-lg font-bold">Your Posts</h3>
            <ul className="mt-2 space-y-2">
              {posts?.map((post) => (
                <li
                  key={post.id}
                  className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 dark:bg-neutral-800"
                >
                  <div>{post.title}</div>
                  <div className="text-sm text-gray-500 dark:text-neutral-400">
                    <span className="text-xs">created on </span>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Posts;
