<template>
  <div class="app">
    <header>
      <nav class="nav">
        <router-link to="/users">Пользователи</router-link>
        <router-link to="/add">Добавление</router-link>
      </nav>
    </header>
    <main>
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </main>
  </div>
</template>

<style lang="scss">

.nav {
  display: flex;
  padding: 0;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 15px;
    text-decoration: none;
    transition: background-color .3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1)
    }

    &.router-link-exact-active {
      background-color: #fff;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

#nprogress {
  position: absolute;
  height: 4px;
  width: 100%;
  top: 48px;
  border-radius: 2px;
  background-color: #2c3e50;
}
</style>

<style lang="scss">

.nav {
  display: flex;
  padding: 0;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 15px;
    text-decoration: none;
    transition: background-color .3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1)
    }

    &.router-link-exact-active {
      background-color: #fff;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

#nprogress {
  position: absolute;
  height: 4px;
  width: 100%;
  top: 48px;
  border-radius: 2px;
  background-color: #2c3e50;
}
</style>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }

</script>

