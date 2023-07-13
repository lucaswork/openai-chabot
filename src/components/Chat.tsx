'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card,CardContent,CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import{ useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const{ messages, input, handleInputChange, handleSubmit} = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Udo responde</CardTitle>
        <CardDescription>pergunta aí</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[640px] w-full pr-4">
          {messages.map(m => (
            <div className="flex gap-3 text-slate-600 text-sm mb-4" key={m.id}>
              {m.role === 'user' ? (
                <Avatar>
                  <AvatarFallback>L</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/11548135?v=4" />
                </Avatar>
              ) : (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/7569209?s=64&v=4" />
                </Avatar>
              )}
              
              <p className="loading-relaxed">
                <span className="block font-bold text-slate-700">{m.role === 'user' ? 'Lucas: ' : 'Udo: '}</span>
                {m.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="space-x-2 flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input value={input} onChange={handleInputChange} placeholder="Como posso de ajudar amigo?" />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}

