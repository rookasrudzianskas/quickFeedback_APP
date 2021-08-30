import Image from 'next/image'
import {useAuth} from "../lib/auth";
import { Box, Button, Flex, Text, Icon, Link, Stack } from '@chakra-ui/core';

export default function Home() {

    const auth = useAuth();

  return (
    <div>
      <main>
            <h1>Quick Feedback</h1>

          <p>
              Current user: <code>{auth.user ? auth.user.email : "There is no user currently on 🔥"}</code>
          </p>

          {auth.user ? (
              <button onClick={(e) => auth.signout()}>Sign Out</button>
          ) : (
              <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
          )}
      </main>
    </div>
  )
}
