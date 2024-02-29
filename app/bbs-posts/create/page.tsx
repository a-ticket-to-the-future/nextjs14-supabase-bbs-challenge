"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'

//　本当はファイルを分けた方が良いらしいが動画の人はとりあえずここに書くと言っていた

const formSchema = z.object({
    username: z.string().min(2, { message:"ユーザー名は2文字以上で入力して下さい"}),
    title: z.string().min(2, { message:"タイトルは2文字以上で入力して下さい"}),
    content: z.string().min(10, { message:"本文は10文字以上で入力して下さい"}).max(140, {message:"本文は140文字以内で入力して下さい"}),

})

const CreateBBSPage = () => {

    const router = useRouter()


    //shadcnの中でのreact-hook-formの使い方の記述
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            title: "",
            content: "",
        },
    });

    const onSubmit = async (value:z.infer<typeof formSchema>) => {


        const { username, title, content } = value
        try{
            await fetch("http://localhost:3000/api/post",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({username,title,content}),
                //ここの三つに出るエラーに対して,
                //onSubmit = async ()の()内にvalue:z.infer<typeof formSchema>、その後に分割代入
                
            });
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-1/2 px-7">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Username" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
          )}
          />
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tilte</FormLabel>
            <FormControl>
              <Input placeholder="Title" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
          )}
          />
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel>本文</FormLabel>
            <FormControl>
              <Textarea placeholder='投稿内容' className=' resize-none' {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
          )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
  )
}

export default CreateBBSPage